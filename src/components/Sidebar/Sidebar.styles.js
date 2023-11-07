import styled from 'styled-components';

export const SidebarStyles = styled.div`
  .sidebar_container {
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .snow_logo {
    display: flex;
    width: 105px;
    height: 32px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 28px 83px 28px 24px;
  }
  .sidebar_item {
    display: flex;
    align-items: center;
  }
  .sidebar_item_text {
    margin-left: 10px;
  }
  .sidebar_items {
    .first-child {
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.05);
    }
    ul {
      padding: 0;
      margin: 16px;
      li {
        display: flex;
        padding: 12px;
        align-items: center;
        gap: 12px;
        align-self: stretch;
        &.sidebar_item {
          display: flex;
          flex-direction: row;
        }
      }
      a {
        color: #1c1c1c;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }
    }
  }
`;
