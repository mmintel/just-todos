import useSWR from "swr";
import {
  Button,
  Input,
  ScrollView,
  Text,
  XGroup,
  XStack,
  YStack,
} from "tamagui";

import { HTTPResult, TodoDTO } from "lib";
import fetch from "unfetch";

const fetcher = (url: string) =>
  fetch(["http://localhost:3000", url].join("/")).then((r) => r.json());

export const App = () => {
  const { data, error, isLoading } = useSWR<HTTPResult<TodoDTO[]>>(
    "/todos",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <YStack space p="$6" height="100vh">
      <ScrollView flex={1}>
        <YStack space="$2">
          {data.data.map((todo) => (
            <XStack
              enterStyle={{ opacity: 0 }}
              bg="$gray4"
              borderRadius="$4"
              p="$2"
              space
              key={todo.id}
            >
              <Text>{todo.title}</Text>
            </XStack>
          ))}
        </YStack>
      </ScrollView>
      <XGroup
        bordered={1}
        borderColor="$gray5"
        hoverStyle={{ borderColor: "$gray8" }}
      >
        <XGroup.Item>
          <Input
            borderWidth={0}
            hoverStyle={{ borderWidth: 0 }}
            focusStyle={{ borderWidth: 0, outlineWidth: 0 }}
            flex={1}
          />
        </XGroup.Item>
        <XGroup.Item>
          <Button>+</Button>
        </XGroup.Item>
      </XGroup>
    </YStack>
  );
};
