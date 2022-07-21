import { styled } from "../../stitches.config";
import Box from "./Box";
import IconButton from "./IconButton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "./Dialog";
import Button from "./Button";
import Image from "./Image";
import { IconInfoCircle, IconX } from "@tabler/icons";
import Typography from "./Typography";

const CharacterBox = styled("div", {
  background: "#fff",
  padding: "1.35rem",
  borderRadius: ".5rem",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
});

const CharacterItem = ({ data }) => {
  return (
    <CharacterBox
      css={{
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <Box
        css={{
          height: 120,
          width: 120,
          flexShrink: 0,
          borderRadius: ".5rem",
          overflow: "hidden",
        }}
      >
        <Image loading="lazy" src={data.image} alt={data.name} />
      </Box>
      <Box>
        <Typography
          as="h2"
          css={{
            fontWeight: 800,
            fontSize: "1.25rem",
            lineHeight: 1.3,
            color: "#2c3e50",
            "@lg": {
              fontSize: "1.5rem",
            },
          }}
        >
          {data.name}
        </Typography>
        <Typography css={{ color: "#7f8c8d" }}>{data.status}</Typography>

        {/* Dialog  */}
        <Box css={{ marginBlockStart: 20 }}>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="small">
                <IconInfoCircle size={16} /> More Info
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle
                css={{
                  fontWeight: 800,
                  fontSize: 20,
                  marginBlockEnd: 30,
                  color: "#212529",
                  "@lg": {
                    fontSize: 40,
                  },
                }}
              >
                {data.name}
              </DialogTitle>

              <Box
                css={{
                  "@lg": {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "2rem",
                  },
                }}
              >
                <Box
                  css={{
                    marginBlockEnd: 20,
                    "@lg": {
                      marginBlockEnd: "0",
                    },
                  }}
                >
                  <Image
                    css={{
                      height: 120,
                      width: 120,
                      objectFit: "cover",
                      borderRadius: ".5rem",
                      "@lg": {
                        height: 200,
                        width: 200,
                      },
                    }}
                    src={data.image}
                    alt={data.name}
                  />
                </Box>

                <Box
                  as="ul"
                  css={{
                    listStylePosition: "inside",
                    listStyleType: "square",
                    flex: 1,
                    fontSize: "1.2rem",
                    "& > li": {
                      "@lg": {
                        paddingBlock: ".25rem",
                      },
                    },
                  }}
                >
                  <Box as="li">{data.species}</Box>
                  <Box as="li">{data.gender}</Box>
                  <Box as="li">
                    Appeared in <b>{data.episode.length}</b> Episodes
                  </Box>
                  <Box as="li">
                    Last Location was <b>{data.location.name}</b>
                  </Box>
                </Box>
              </Box>

              <DialogClose asChild>
                <IconButton css={{ color: "$primary" }}>
                  <IconX />
                </IconButton>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </CharacterBox>
  );
};

export default CharacterItem;
