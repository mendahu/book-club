import { Box } from "@material-ui/core";
import CommunityItem from './CommunityItem'

const CommunityList = (props) => { 

  return (
    <Box component="section">
      {props.commData.map((community, index) => <CommunityItem key={index} data={community}/>)}
    </Box>
  )
}

export default CommunityList;