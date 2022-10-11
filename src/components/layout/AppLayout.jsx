import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authUtils from "../../utils/authUtils";
import Loading from "../common/Loading";
import notionLogo from "../../assets/images/notion-logo.png";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";
import {useDispatch} from "react-redux"
import { setUser } from "../../redux/features/userSlice";

const AppLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      //ページ切り替える度に認証チェック(トークン持ってるかどうか確認)
      //ここで404notfoud
      const user = await authUtils.isAuthenticated();
      if (!user) {
        navigate("/login")
      }else {
        dispatch(setUser(user))

      }
    };
    checkAuth();
  }, [navigate]);

  return (
  <div>
    <Box sx={{display:"flex"}}>
        <Sidebar />
        <Box sx={{flexGrow:1, p:1,width:"max-content"}}>
            <Outlet/>

        </Box>
    </Box>
  </div>
  )
};

export default AppLayout;