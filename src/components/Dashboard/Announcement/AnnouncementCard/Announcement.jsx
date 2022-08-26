import { Card, CardContent, List, ListItem, Typography } from "@mui/material";

const AnnoucmentCard = ({ announcement }) => {
  return (
    <Card sx={{ marginTop: "20px", maxWidth: "500px" }}>
      <CardContent>
        <List>
          {announcement?.map((ann, idx) => {
            return (
              <ListItem key={idx}>
                <Typography variant="subtitle" style={{ fontWeight: "600" }}>
                  {ann.name}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default AnnoucmentCard;
