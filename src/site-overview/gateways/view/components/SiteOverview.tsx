import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { ResolvedData } from "@shared/models/CommonModels.ts";

import styles from "./SiteOverview.module.scss";
import { Site } from "../../../domains/Site.ts";

const SiteOverview = (props: ResolvedData) => {
  const site: Site = props.data;
  console.log("SiteOverview", site);
  return (
    <>
      <main className={styles["site-overview-container"]}>
        <Card sx={{ minWidth: 500 }} variant="outlined">
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Site Name: <span>{site.name}</span>
            </Typography>
            <Typography variant="h5">Site Id: {site.id}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              OTE
            </Typography>
            <Typography variant="h5">More Information</Typography>
            <Typography color="text.secondary">Location: Athens</Typography>
            <Typography color="text.secondary">Status: Pending</Typography>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default SiteOverview;
