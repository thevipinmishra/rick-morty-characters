import { IconChevronRight, IconChevronLeft } from "@tabler/icons";

import Stack from "../components/Stack";
import Box from "../components/Box";
import IconButton from "../components/IconButton";

const Pagination = ({ isLoading, pagination, paginationInfo }) => {
  return (
    <>
      {!isLoading && (
        <Box css={{ marginBlockStart: 50 }}>
          <Stack
            direction="row"
            css={{ gap: "10px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <IconButton
              disabled={pagination.active === 1}
              variant={pagination.active === 1 ? "filled" : "outlined"}
              onClick={() => pagination.previous()}
            >
              <IconChevronLeft />
            </IconButton>
            {pagination.range.map((item, i) =>
              typeof item === "number" ? (
                <IconButton
                  key={i}
                  variant={pagination.active === item ? "filled" : "outlined"}
                  onClick={() => pagination.setPage(item)}
                >
                  {item}
                </IconButton>
              ) : (
                <Box key={i} css={{ color: "#7f8c8d" }}>
                  ...
                </Box>
              )
            )}
            <IconButton
              disabled={pagination.active === paginationInfo?.pages}
              variant={
                pagination.active === paginationInfo?.pages
                  ? "filled"
                  : "outlined"
              }
              onClick={() => pagination.next()}
            >
              <IconChevronRight />
            </IconButton>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Pagination;
