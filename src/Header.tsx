import {
  Search,
  Notification,
  Switcher,
  BlockStorage,
  UserAvatar,
  CloudRegistry,
  GameConsole,
  Activity,
  Help,
  ChartRelationship,
  TreeView,
  EventsAlt,
  Sigma,
  BeeBat,
} from "@carbon/icons-react";
import {
  HeaderContainer,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavLink,
  SideNavItems,
} from "@carbon/react";

interface IHeaderProps {
  isSideNavExpanded: boolean;
  onClickSideNavExpand: () => boolean;
}

export default function Head() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }: IHeaderProps) => (
        <>
          <Header aria-label="IBM Platform Name">
            <HeaderMenuButton
              aria-label="Open menu"
              isCollapsible
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <BlockStorage />
            <HeaderName href="#" prefix="Ebrai">
              Conceptualizer
            </HeaderName>
            <HeaderNavigation aria-label="Conceptualizer">
              <HeaderMenuItem href="#">Dashboard</HeaderMenuItem>
              <HeaderMenuItem href="#">Creators</HeaderMenuItem>
              <HeaderMenuItem href="#">Earn</HeaderMenuItem>
              <HeaderMenuItem href="#">Challenges</HeaderMenuItem>
              <HeaderMenuItem href="#">Concept</HeaderMenuItem>
              <HeaderMenuItem href="#">Arena</HeaderMenuItem>
              <HeaderMenuItem href="#">Models</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Search"
                onClick={() => console.log("search click")}
              >
                <Search size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Game">
                <GameConsole size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Cloud">
                <CloudRegistry size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="Help"
                onClick={() => console.log("search click")}
              >
                <Help size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications">
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Profile">
                <UserAvatar size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                tooltipAlignment="end"
              >
                <Switcher size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav
              aria-label="Side navigation"
              isRail
              expanded={isSideNavExpanded}
              onOverlayClick={onClickSideNavExpand}
            >
              <SideNavItems>
                <SideNavLink
                  renderIcon={Activity}
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavLink>
                <SideNavLink
                  renderIcon={TreeView}
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventsAlt}
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavLink>
                <SideNavLink
                  renderIcon={ChartRelationship}
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavLink>
                <SideNavLink
                  renderIcon={Sigma}
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavLink>
                <SideNavLink
                  renderIcon={BeeBat}
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  );
}
