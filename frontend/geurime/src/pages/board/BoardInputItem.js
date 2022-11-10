/*
@author 유현욱
@since 2022.10.28
*/

import { Avatar, Grid, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { fontWeight } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';


export default function BoardInputItem({handleChange, boardCategory, boardCategories, changeProfile, imgRef, textRef, titleRef, imageUrl, text, changeText,changeTitle, title}) { 
  // const [title, setTitle] = useState();


  // const titleChange = (event) => {
  //   setTitle(event.target.value);
  //   // console.log({제목: title})
  // };

  return (
    <Grid>
      <Grid container justifyContent="center">
        <form method="post" encType="multipart/form-data">
        <label htmlFor="profile" >
            <Grid item xs={12} sx={{ width: "300px",height: '300px', display: "table", textAlign: 'center'}}>
              {imageUrl ? (
                <img src={imageUrl} style={{ height: '100%', width: '100%', margin: '2%', objectFit: "cover" }} />
              ) : (
                <Paper
                  item  
                  sx={{
                    height: "40vh",
                    width: "40vh",
                    textAlign: "center",
                    verticalAlign: "middle",
                    display: "flex",
                  }}
                >
                  <AddCircleIcon
                      sx={{
                        margin: "auto",
                      color: "secondary.main",
                      fontSize: "3.5em",
                    }}
                  />
                </Paper>)}
        </Grid>


     </label>
      <input
        style={{ display: "none" }}
        type="file"
        ref={imgRef}
        onChange={(e) => {
          changeProfile(e);
        }}
        accept="img/*"
        id="profile"
      />
      </form>
    </Grid>

      {/* 분류 */}
      <Grid
        container
        direction="row"
        alignItems='center'
        sx={{marginTop: '5%'}}
      >
        <Grid
          item
          xs={2.5}
          textAlign='center'
        >
          분류
        </Grid>
        <Grid
          item
          xs={9.5}
          alignItems='center'
        >
        <TextField
          id="standard-select-currency"
          select
          value={boardCategory}
          onChange={handleChange}
          variant="standard"
          sx={{ width: '31vh'}}
        >
          {boardCategories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
        </Grid>

        {/* 제목 */}
        <Grid
          container
          direction="row"
          alignItems='center'
          sx={{marginTop: '5%'}}
        >
        <Grid
          item
          xs={2.5}
          textAlign='center'
        >
          제목
        </Grid>
        <Grid
          item
            xs={9.5}
          alignItems='center'
        >
            <TextField
              sx={{ width: '31vh' }}
              variant="standard"
              placeholder="제목을 입력하세요"
              inputRef={titleRef}
              value={title}
              onChange={(e) => {
                changeTitle(e);
              }}
            />
        </Grid>
      </Grid>

      {/* 내용 */}
      <Grid
        container
      >
        <Grid
          item
          xs={2.5}
          textAlign='center'
          sx={{ marginTop: '5%' }}
        >
          내용
        </Grid>
        <TextField
          multiline
          minRows={5}
          maxRows={5}
          inputRef={textRef}
          value={text}
          onChange={(e) => {
            changeText(e);
          }}
          sx={{ width: '87vw', borderBlockColor: '#FFE082', borderRadius: 10, borderColor: '#FFE082', marginLeft: '6vw', marginTop: '2vh' }}
        />
      </Grid>
      {/* 등록 버튼 */}
      <Grid>

      </Grid>
    </Grid>
  </Grid>
  )
}