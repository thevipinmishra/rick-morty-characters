import { useState } from "react";
import { useQuery } from "react-query";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { usePagination } from "@mantine/hooks";
import { globalCss } from "../stitches.config";
import Box from "./components/Box";
import Stack from "./components/Stack";
import IconButton from "./components/IconButton";
import Input from "./components/Input";
import Container from "./components/Container";
import Typography from "./components/Typography";
import CharacterItem from "./components/Character";

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
    siblings: 2,
  });

  /* A ternary operator that checks if the search is empty or not. If it is empty, it will return the
page number. If it is not empty, it will return the search query. */
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
            "@lg": {
              fontSize: "3rem",
              marginBottom: 30,
            },
          }}
        >
          Rick Morty API
        </Typography>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Stack gap={2}>
            <Input
              placeholder={`Search all ${paginationInfo.count} characters`}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              css={{
                "@lg": {
                  padding: "1rem 2rem",
                  maxWidth: "600px",
                  marginInline: "auto",
                  fontSize: 18,
                  marginBlock: "3rem",
                },
              }}
            />
            <Box
              css={{
                display: "grid",
                gap: "1rem",
                "@lg": {
                  gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
                },
              }}
            >
              {characters.map((person) => (
                <CharacterItem key={person.id} data={person} />
              ))}
            </Box>
          </Stack>
        )}

        {/* Pagination  */}

        {!isLoading && (
          <Box css={{ marginBlockStart: 50 }}>
            <Stack
              direction="row"
              css={{ gap: "10px", justifyContent: "center" }}
            >
              <IconButton
                disabled={pagination.active === 1}
                css={{
                  backgroundColor: pagination.active === 1 ? "#2980b9" : "#fff",
                  border: "1px solid #2980b9",
                  color: pagination.active === 1 ? "#fff" : "#2980b9",
                  borderRadius: "4px",
                  "&:disabled": {
                    cursor: "not-allowed",
                    opacity: ".5",
                  },
                }}
                onClick={() => pagination.previous()}
              >
                <ChevronLeftIcon />
              </IconButton>
              {pagination.range.map((item, i) =>
                typeof item === "number" ? (
                  <IconButton
                    key={i}
                    css={{
                      backgroundColor:
                        pagination.active === item ? "#2980b9" : "#fff",
                      border: "1px solid #2980b9",
                      color: pagination.active === item ? "#fff" : "#2980b9",
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
                      ? "#2980b9"
                      : "#fff",
                  border: "1px solid #2980b9",
                  color:
                    pagination.active === paginationInfo.pages
                      ? "#fff"
                      : "#2980b9",
                  borderRadius: "4px",
                  "&:disabled": {
                    cursor: "not-allowed",
                    opacity: ".5",
                  },
                }}
                onClick={() => pagination.next()}
              >
                <ChevronRightIcon />
              </IconButton>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default App;
