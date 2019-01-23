import { connect } from "react-redux";
import React, { memo, Fragment } from "react";

// redux state数据 及 action
const rxValue = () => {
  const rxProps = state => {
    return {};
  };
  // 添加action
  return {
    ...rxProps
  };
};

interface IProps {
  someType?: any;
}

export default connect(rxValue)(
  // 代码片段及逻辑
  memo((props: IProps) => {
    return <Fragment />;
  })
);















// import React, { memo, useState, Fragment } from "react";
// import { Icon, Layout, Breadcrumb } from "antd";
// import { connect } from "react-redux";
// import HeaderLayout from "./HeaderLayout";
// import SiderLayout from "./SiderLayout";
// import Stock from "../../page/admin/stock/Stock";
// import Supplier from "../../page/admin/supplier/Supplier";
// import Purchase from "../../page/admin/purchase/Purchase";
// import Distribution from "../../page/admin/distribution/Distribution";
// import MobileSiderLayout from "./MobileSiderLayout";
// import {
//   AdminStyle,
//   HeaderStyle,
//   BreadcrumbStyle,
//   ContentStyle,
//   FooterStyle,
//   MainStyle
// } from "./styled";
// import { IRxReducer } from "../../store/typeing";
//
// const mapStateToProps = state => {
//   return {
//     admin: state.admin
//   };
// };
//
// /**
//  * @description admin 界面框架，及基础ui功能
//  * 整体实现功能
//  * 1. 布局框架 ✅
//  * 2. 电脑端，手机端适配 ✅
//  * 3. redux 数据接入 ✅
//  * 4. 内容栏组件引入 🚧
//  * 5. ui功能实现  ✅
//  * 6. 代码审核优化及重构 🚧
//  */
// export default connect(mapStateToProps)(
//   memo((props: IRxReducer) => {
//     // 控制侧边栏的伸缩
//     const [collapsed, setCollapsed] = useState(false);
//     const [pcCollapsed, setPcCollapsed] = useState(false);
//     // 切换状态控制
//     const toggle = (): void => {
//       setCollapsed(!collapsed);
//     };
//     // 手机端状态切换
//     const mbToggle = (): void => {
//       setPcCollapsed(!pcCollapsed);
//     };
//     // 侧边栏断点处理
//     const onBreakpoint = (broken): void => {
//       // broken ? setCollapsed(true) : setCollapsed(false);
//       if (broken) {
//         setCollapsed(true);
//         setPcCollapsed(false);
//       } else {
//         setCollapsed(false);
//         setPcCollapsed(false);
//       }
//     };
//     const { Sider } = Layout;
//     // 内容相应的组件
//     const content = {
//       stock: <Stock />,
//       supplier: <Supplier />,
//       purchase: <Purchase />,
//       distribution: <Distribution />
//     };
//     //  sider 配置
//     const siderConfig: {} = {
//       collapsed: collapsed,
//       onBreakpoint: onBreakpoint,
//       breakpoint: "lg",
//       collapsedWidth: "0",
//       trigger: null,
//       collapsible: true
//     };
//
//     return (
//       <Fragment>
//         <AdminStyle>
//           <Sider {...siderConfig}>
//             {/*<SiderLayout />*/}
//           </Sider>
//           <Layout>
//             <HeaderStyle>
//               {/*<HeaderLayout*/}
//                 {/*toggle={toggle}*/}
//                 {/*mbToggle={mbToggle}*/}
//                 {/*collapsed={collapsed}*/}
//               {/*/>*/}
//             </HeaderStyle>
//             <MainStyle>
//               {/*<BreadcrumbStyle>*/}
//                 {/*<Breadcrumb.Item>*/}
//                   {/*<Icon type="home" />*/}
//                 {/*</Breadcrumb.Item>*/}
//               {/*</BreadcrumbStyle>*/}
//               {/*<ContentStyle>{content[props.admin.siderSelect]}</ContentStyle>*/}
//               {/*<FooterStyle>Copyright 2018 蚂蚁金服体验技术部出品</FooterStyle>*/}
//             </MainStyle>
//           </Layout>
//         </AdminStyle>
//         {/*<MobileSiderLayout mbToggle={mbToggle} collapsed={pcCollapsed} />*/}
//       </Fragment>
//     );
//   })
// );
