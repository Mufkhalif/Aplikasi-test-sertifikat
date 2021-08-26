import { Auth, Typography, Button } from "@supabase/ui";
const { Text } = Typography;
import { supabase } from "../utils/api";

const Container = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

const AuthProfile = () => (
  <Auth.UserContextProvider supabaseClient={supabase}>
    <Container supabaseClient={supabase}>
      <Auth providers={["facebook", "github"]} supabaseClient={supabase} />
    </Container>
  </Auth.UserContextProvider>
);

export default AuthProfile;
