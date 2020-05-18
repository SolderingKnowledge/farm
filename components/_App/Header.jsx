import { Menu, Container, Image , Icon} from "semantic-ui-react";
import Router, { useRouter } from "next/router"; //router to get current page value
import Link from "next/link";
import Progress from "nprogress";

Router.onRouteChangeStart = () =>
Progress.start();

Router.onRouteChangeComplete = () =>
Progress.done();

Router.onRouteChangeError = () => 
Progress.done();


const isActive= route =>  {
    return route === useRouter().pathname;
}

const Header = () => {
    let user=false;
    return (
        <Menu fluid inverted>
            <Container>
            {/* home */}
                <Link href="/">
                    <Menu.Item header active={isActive("/")}>
                        <Image size="mini" src="/static/farm.png" style={{height: "40px", width: "40px"}} />
                    Farmers Market
                </Menu.Item>
                </Link>

            {/* cart */}
                <Link href="/cart">
                    <Menu.Item header active={isActive("/cart")}>
                        <Icon name="cart" size="large" />
                    Cart
                    </Menu.Item>
                </Link>

                {/* user */}
                {user && <Link href="/create">
                    <Menu.Item header active={isActive("/create")}>
                        <Icon name="add square" size="large" />
                    Create
                    </Menu.Item>
                </Link>}

                {/* account */}
                { user ? (<>
                    <Link href="/account">
                        <Menu.Item header active={isActive("/account")}>
                            <Icon name="user" size="large" />
                        Account
                        </Menu.Item>
                    </Link>
                    {/* sign out */}
                    <Menu.Item header>
                        <Icon name="sign out" size="large" />
                        Sign out
                    </Menu.Item>
                </>):

                (<>
                    {/* sign in */}
                    <Menu.Item header>
                        <Icon name="sign in" size="large" />
                        Sign in
                    </Menu.Item>

                    {/* sign up*/}
                    <Link href="/signup">
                        <Menu.Item header active={isActive("/signup")}>
                            <Icon name="signup" size="large" />
                        Sign up
                        </Menu.Item>
                    </Link>
                </>) }

            </Container>
        </Menu>
    );
}
export default Header;