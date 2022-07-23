import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IconSearch, IconSunHigh, IconMoonStars } from "@tabler/icons";
import { usePagination, useColorScheme } from "@mantine/hooks";
import { globalCss, darkTheme } from "../stitches.config";
import Box from "./components/Box";
import Input from "./components/Input";
import Container from "./components/Container";
import Typography from "./components/Typography";
import CharacterItem from "./components/Character";
import Spinner from "./components/Spinner";
import { ToggleGroup, ToggleGroupItem } from "./components/ToggleGroup";
import Pagination from "./features/Pagination";
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
    backgroundColor: "$bodyBg !important",
    color: "$bodyText",
  },
  img: {
    display: "block",
    maxWidth: "100%",
  },
});

function App() {
  globalStyles();

  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
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

  useEffect(() => {
    document.body.classList.add(theme === "dark" ? darkTheme : "lightTheme");

    return () => (document.body.className = "");
  }, [theme]);

  return (
    <Box
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

              [`.${darkTheme} &`]: {
                color: "$bodyText",
              },

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

        <Box
          css={{
            marginBlockEnd: 30,
            display: "flex",
            justifyContent: "center",
            "@lg": {
              marginBlockEnd: 50,
            },
          }}
        >
          <ToggleGroup
            type="single"
            value={theme}
            onValueChange={(value) => setTheme(value)}
            aria-label="Toggle Theme"
          >
            <ToggleGroupItem value="light" aria-label="Toggle Light Theme">
              <IconSunHigh size={20} />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Toggle Dark Theme">
              <IconMoonStars size={20} />
            </ToggleGroupItem>
          </ToggleGroup>
        </Box>

        {isLoading ? (
          <Box css={{ marginTop: 40 }}>
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

        <Pagination
          isLoading={isLoading}
          pagination={pagination}
          paginationInfo={paginationInfo}
        />
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

              [`.${darkTheme} &`]: {
                color: "$bodyText",
              },
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
