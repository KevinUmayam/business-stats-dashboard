import { Box } from "@mui/material"
import { styled } from "@mui/system"

const DashboardBox = styled(Box)(({ theme }) => ({
  display:"flex" ,
  justifyContent:"space-between",
  alignItems:"center",
}))

export default DashboardBox