import React, { useContext, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { myContext } from "./PollApi";

export const Middl= () => {
  const { fetchNewsFrequently , state, pageNum, setPageNum } =
    useContext(myContext);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchNewsFrequently();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [ fetchNewsFrequently,pageNum]);

  useEffect(() => {
    fetchNewsFrequently();
  }, [fetchNewsFrequently, pageNum]);

  return (
   
    <Box>
      <TableContainer>
        {state?.hits?.length > 0 && (
          <Table >
            <Thead>
              <Tr>
                <Th>NEWS</Th>
                <Th>URL</Th>

                <Th isNumeric>POST TIME</Th>
                <Th>AUTHOR  </Th>
              </Tr>
            </Thead>
            <Tbody>
              {state.hits.map((ele, idx) => {
                return (
                  <Tr key={idx}>
                    <Td>
                      {ele.title}{" "}
                     
                    </Td>
                    <Td><Link color="blue" href={ele.url} target="_blank">
                        More detail
                      </Link></Td>
                    
                    <Td isNumeric>
                      {ele.created_at.slice(0, 10)}{"/"}
                      {ele.created_at.slice(11, 16)}
                    </Td>
                    <Td>{ele.author}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        )}
      </TableContainer>
      <Flex justifyContent={"center"} alignItems={"center"} m={"20px"}>
        <Button
          variant={"link"}
          display={pageNum === 0 ? "none" : "block"}
          onClick={() => {
            const pageCount = pageNum - 1;
            setPageNum(pageCount);
          }}
        >
          Prev
        </Button>
        &nbsp;&nbsp;
        <Button>{pageNum}</Button>&nbsp;&nbsp;
        <Button
          variant={"link"}
          display={pageNum === state?.nbPages - 1 ? "none" : "block"}
          onClick={() => {
            const pageCount = pageNum + 1;
            setPageNum(pageCount);
          }}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};