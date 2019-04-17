// import React, { memo, useState } from "react";
// import {
//   Theme,
//   TextField,
//   DialogTitle,
//   DialogContent,
//   Dialog,
//   DialogActions,
//   Button,
//   FormControl,
//   FormControlLabel,
//   Checkbox,
//   Select,
//   MenuItem,
//   InputLabel
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
//
// interface IProps {
//   type?: "create" | "lib";
// }
//
// export default memo((props: IProps) => {
//   // 模态框设置
//   const [store, setModel] = useState(true);
//   const modelOpen = () => {
//     setModel(true);
//   };
//   const modelClose = () => {
//     setModel(false);
//   };
//
//   // 样式
//   const useStyles = makeStyles((theme: Theme) => ({
//     theme_card: {
//       boxShadow: theme.shadows[0],
//       padding: "8px 16px"
//     },
//     nav_card: {
//       boxShadow: theme.shadows[0],
//       padding: "8px 16px",
//       margin: "8px 0"
//     },
//     page_card: {
//       boxShadow: theme.shadows[0],
//       padding: "8px 16px"
//     },
//     add: {
//       alignCenter: "center",
//       textAlign: "center",
//       display: "flex",
//       justifyContent: "center",
//       marginTop: -15
//     },
//     icon: {
//       color: "white",
//       width: 21,
//       height: 21,
//       verticalAlign: "-0.15em",
//       fill: "currentColor",
//       overflow: "hidden"
//     },
//     snack: {
//       backgroundColor: "#ffa000"
//     }
//   }));
//   const classes = useStyles();
//
//   return (
//     <Dialog
//       open={store}
//       onClose={modelClose}
//       aria-labelledby="form-dialog-title"
//     >
//       <DialogTitle id="form-dialog-title">创建页面</DialogTitle>
//       <DialogContent>
//         <FormControl style={{ width: 336 }}>
//           <TextField
//             autoFocus={true}
//             margin="dense"
//             id="name"
//             label="标题"
//             fullWidth={true}
//           />
//           <FormControl>
//             <InputLabel htmlFor="age-simple">Age</InputLabel>
//             <Select
//               MenuProps={{
//                 PaperProps: {
//                   style: {
//                     maxHeight: 100,
//                     width: 250
//                   }
//                 }
//               }}
//               inputProps={{
//                 name: "age",
//                 id: "age-simple"
//               }}
//             >
//               {" "}
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControlLabel
//             style={{ marginTop: 8 }}
//             control={<Checkbox value="checkedC" />}
//             label="客服"
//           />
//         </FormControl>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={modelClose} color="primary">
//           关闭
//         </Button>
//         <Button onClick={modelClose} color="primary">
//           创建
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// });
