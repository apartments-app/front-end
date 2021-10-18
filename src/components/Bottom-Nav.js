import styled from "styled-components";

const BottomNav = ({ canAlternate = false }) => {
  const Button = styled.button`
    font-family: Cabin, sans-serif;
    font-style: 600;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ff4b96;
    /* color: #FFFFFF */

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;

    &:not(:first-child) {
      margin-left: 11px;
    }
  `;

  const buttonPart = canAlternate
    ? {
        listings: {
          src: "/media/listings.svg",
          alt: "listings icon",
          label: "Listings",
        },
        documents: {
          src: "/media/documents.svg",
          alt: "documents icon",
          label: "Documents",
        },
      }
    : {
        search: {
          src: "/media/search.svg",
          alt: "search icon",
          label: "Search",
        },
        waitLists: {
          src: "/media/wait-lists.svg",
          alt: "wait-lists icon",
          label: "WaitLists",
        },
      };

  const buttons = {
    ...buttonPart,
    inbox: { src: "/media/inbox.svg", alt: "wait-lists icon", label: "Inbox" },
    profile: {
      src: "/media/profile.svg",
      alt: "wait-lists icon",
      label: "Profile",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.25)",
        padding: "15px"
      }}
    >
      {Object.values(buttons).map((v) => {
        return (
          <Button>
            <img src={v.src} alt={v.alt} />
            {v.label}
          </Button>
        );
      })}
    </div>
  );
};

export default BottomNav;
