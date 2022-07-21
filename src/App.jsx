import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IconSearch, IconChevronRight, IconChevronLeft } from "@tabler/icons";
import { usePagination } from "@mantine/hooks";

import { globalCss } from "../stitches.config";
import Box from "./components/Box";
import Stack from "./components/Stack";
import IconButton from "./components/IconButton";
import Input from "./components/Input";
import Container from "./components/Container";
import Typography from "./components/Typography";
import CharacterItem from "./components/Character";
import Spinner from "./components/Spinner";
import api from "./utils/axios";

/* Setting the global styles for the app. */
const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "$sansSerif",
    fontSize: "1rem",
    lineHeight: "1.5",
    backgroundColor: "#f5f5f5",
    color: "#4a5568",
  },
  img: {
    display: "block",
    maxWidth: "100%",
  },
});

function App() {
  globalStyles();

  const [characters, setCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState([]);
  const [search, setSearch] = useState("");

  const pagination = usePagination({
    total: paginationInfo.pages,
    initialPage: 1,
  });

  const filterURL =
    search.length > 0 ? `/?name=${search}` : `?page=${pagination.active}`;

  const { isLoading } = useQuery(
    ["characters", pagination.active, search.length > 0 && search],
    () =>
      api.get(`/character${filterURL}`).then((res) => {
        setCharacters(res.data.results);
        setPaginationInfo(res.data.info);
      }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <Box
      className="App"
      css={{
        paddingBlockStart: 20,
        paddingBlockEnd: 40,
        "@lg": {
          paddingBlockStart: 50,
        },
      }}
    >
      <Container>
        <Typography
          as="h1"
          css={{
            textAlign: "center",
            marginBottom: 20,
            lineHeight: 1.5,
            fontWeight: 800,
            fontSize: "1.5rem",
            textShadow: `0 0 rgb(255 255 255),
            0 0 rgb(0   0   255),
            0 0 rgb(0   255 0  )`,
            "&:hover": {
              textShadow:
                ".2px -.05px rgb(255 254 254), .08px .13px rgb(0   0   255), .1px -.15px rgb(0   255 0  )",
              transition: ".2s cubic-bezier(0.5,880,0.5,-880)",
            },
            "@lg": {
              fontSize: "3rem",
              marginBottom: 30,
            },
          }}
        >
          Rick Morty API
        </Typography>

        <Box
          css={{
            position: "relative",
            marginBlock: "2rem",
            "@lg": {
              maxWidth: "600px",
              marginInline: "auto",
              marginBlock: "3rem",
            },
          }}
        >
          <Input
            placeholder={`Search all ${
              !isLoading ? paginationInfo.count : ""
            } characters`}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            css={{
              padding: ".75rem 1rem .75rem 3rem",
              "@lg": {
                padding: "1rem 2rem 1rem 3rem",
                fontSize: 18,
              },
            }}
          />
          <Box
            css={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              color: "$primary",
              "& > svg": {
                width: 16,
                "@lg": {
                  width: 24,
                },
              },
            }}
          >
            <IconSearch />
          </Box>
        </Box>

        {isLoading ? (
          <Box css={{ marginTop: "20" }}>
            <Spinner css={{ marginInline: "auto" }} />
          </Box>
        ) : (
          <Box
            css={{
              display: "grid",
              gap: "1rem",
              "@lg": {
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              },
            }}
          >
            {characters.map((person) => (
              <CharacterItem key={person.id} data={person} />
            ))}
          </Box>
        )}

        {/* Pagination  */}

        {!isLoading && (
          <Box css={{ marginBlockStart: 50 }}>
            <Stack
              direction="row"
              css={{ gap: "10px", justifyContent: "center", flexWrap: "wrap" }}
            >
              <IconButton
                disabled={pagination.active === 1}
                css={{
                  backgroundColor:
                    pagination.active === 1 ? "$primary" : "#fff",
                  border: "1px solid #2980b9",
                  color: pagination.active === 1 ? "#fff" : "$primary",
                  borderRadius: "4px",
                  "&:disabled": {
                    cursor: "not-allowed",
                    opacity: ".5",
                  },
                }}
                onClick={() => pagination.previous()}
              >
                <IconChevronLeft />
              </IconButton>
              {pagination.range.map((item, i) =>
                typeof item === "number" ? (
                  <IconButton
                    key={i}
                    css={{
                      backgroundColor:
                        pagination.active === item ? "$primary" : "#fff",
                      border: "1px solid $primary",
                      color: pagination.active === item ? "#fff" : "$primary",
                      borderRadius: "4px",
                    }}
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
                disabled={pagination.active === paginationInfo.pages}
                css={{
                  backgroundColor:
                    pagination.active === paginationInfo.pages
                      ? "$primary"
                      : "#fff",
                  border: "1px solid $primary",
                  color:
                    pagination.active === paginationInfo.pages
                      ? "#fff"
                      : "$primary",
                  borderRadius: "4px",
                  "&:disabled": {
                    cursor: "not-allowed",
                    opacity: ".5",
                  },
                }}
                onClick={() => pagination.next()}
              >
                <IconChevronRight />
              </IconButton>
            </Stack>
          </Box>
        )}
      </Container>
      {!isLoading && (
        <Box
          css={{
            marginBlockStart: 70,
            textAlign: "center",
            fontSize: 16,

            "& > a": {
              color: "$primary",
              textDecoration: "none",
            },
            "@lg": {
              fontSize: 18,
              fontWeight: 600,
            },
          }}
        >
          Built by{" "}
          <a href="https://vipinmishra.dev/" target="_blank">
            Vipin Mishra
          </a>
        </Box>
      )}
    </Box>
  );
}

export default App;
