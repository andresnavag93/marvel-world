import React, { memo } from "react";
import { Card } from "../Card/Card";
import { Container, Title, Button, Div } from "./CardsHorizontalListStyles";
import { Link as LinkRouter } from "@reach/router";

import { FixedSizeList as FixedList, areEqual } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { MyLoader } from "../Loader/Loader";

export const CardsHorizontalList = ({ title, url, data, loading = false }) => {
  const Column = memo(
    ({ index, style }) => (
      <div style={style}>
        <Card key={index} detail={data[index]} url={url} />
      </div>
    ),
    areEqual
  );

  return (
    <>
      <Container>
        <Div>
          <Title>{title}</Title>
          <LinkRouter to={url}>
            <Button>See more</Button>
          </LinkRouter>
        </Div>

        {loading ? (
          <MyLoader />
        ) : (
          <AutoSizer>
            {({ height, width }) => (
              <FixedList
                height={270}
                itemCount={data.length}
                itemSize={270}
                layout="horizontal"
                width={width}
              >
                {Column}
              </FixedList>
            )}
          </AutoSizer>
        )}
      </Container>
    </>
  );
};
