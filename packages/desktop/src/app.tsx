import { Plus } from "@tamagui/lucide-icons";
import {
  Button,
  Input,
  ScrollView,
  Text,
  XGroup,
  XStack,
  YStack,
} from "tamagui";

const todos = [
  {
    id: "apsodjaosd",
    title: "foo",
    description: "Lorem",
  },
  {
    id: "2190ejße",
    title: "bar",
    description: "Lorem",
  },
];

export const App = () => {
  return (
    <YStack space p="$6" height="100vh">
      <ScrollView flex={1}>
        <YStack space="$2">
          {todos.map((todo) => (
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
