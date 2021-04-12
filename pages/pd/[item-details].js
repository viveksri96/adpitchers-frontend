import { Breadcrumbs, Button, Grid, Link, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { DateRangePicker } from "react-date-range";
import Carousel from "react-material-ui-carousel";
import MoreDetails from "../../components/productListing/MoreDetails";
import { Axios } from "../../config/environment";
export default class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <BillboardDetailPage details={this.props.details || {}} />
      </div>
    );
  }
}

const BillboardDetailPage = withStyles({
  productDetailContainer: {
    padding: "24px 16px",
  },
  headerLeftItem: {
    display: "flex",
    justifyContent: "center",
  },
  rangeDatePicker: {
    width: 450,
  },
  slideContainer: {
    height: 600,
  },
})(({ classes, details }) => {
  return (
    <Grid container spacing={2} className={classes.productDetailContainer}>
      <Grid container spacing={2} style={{ justifyContent: "space-around" }}>
        <Grid item xs={6} className={classes.headerLeftItem}>
          <Grid container>
            <Carousel
              autoPlay={false}
              // animation="slide"
              className={classes.slideContainer}
            >
              {details.billboard_image.map((item, i) => (
                <div
                  style={{
                    backgroundImage: `url("${item.url}")`,
                    width: 900,
                    height: 600,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </Carousel>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container style={{ flexDirection: "column" }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/listing">
                Shop
              </Link>
              <Typography color="textPrimary">Hoarding</Typography>
            </Breadcrumbs>
            <Typography
              variant="h3"
              component="div"
              style={{ margin: "12px 0" }}
            >
              <b>Panton tunion Chair</b>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{ color: "orange", marginBottom: 12 }}
            >
              <b>$8999</b>
            </Typography>
            <Typography variant="caption" component="div">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look li
            </Typography>
            <hr style={{ width: "100%", margin: "12px 0", opacity: "30%" }} />
            <Typography
              variant="h6"
              component="div"
              color="primary"
              style={{ marginBottom: 12 }}
            >
              <b>Select Dates </b>
              <span style={{ fontSize: 12, color: "black" }}>
                (Select dates to check availbility)
              </span>
            </Typography>
            <DateRangePicker
              ranges={[
                {
                  startDate: new Date(),
                  endDate: new Date(),
                  key: "selection",
                },
              ]}
              onChange={() => {}}
              className={classes.rangeDatePicker}
            />

            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "orange",
                color: "white",
                margin: "12px 0",
              }}
            >
              <b>Book Now</b>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <MoreDetails />
    </Grid>
  );
});

export async function getServerSideProps({ params }) {
  const res = await Axios.get(`/billboard/${params["item-details"]}`).catch(
    console.log
  );
  return {
    props: {
      details: res.data,
    },
  };
}

// const BiddingPage = withStyles({
//   bidPageContainer: {
//     maxWidth: 1200,
//     margin: '0 auto'
//   },
//   productDescription: {
//     margin: '24px 16px',
//   },
//   reqTitle: {
//     padding: '24px 16px',
//     borderBottom: '1px solid #E0E0E0',
//     backgroundColor: '#F9F9F9'
//   },
//   descContainer: {
//     padding: '24px 16px'
//   },
//   leftSidebar: {
//     padding: '24px 16px',
//     backgroundColor: '#F9F9F9',
//     margin: '24px 0px',
//     '& > div > button': {
//       minWidth: 300,
//       margin: 4,
//       fontSize: 16
//     }
//   }
// })(({classes}) => {
//   return (
//     <Grid container className={classes.bidPageContainer}>
//       <Grid item xs={8}>
//         <Paper elevation={2} className={classes.productDescription}>
//           <Typography variant="h4" className={classes.reqTitle}><b>Need 500 flex printed.</b></Typography>
//           <Container className={classes.descContainer}>
//             <Typography variant="h5">
//               Product Description
//             </Typography>
//             <Typography variant="body1">
//               The standard Lorem Ipsum passage, used since the 1500s
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

//               Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
//               "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
//               eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
//               dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
//               consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
//               Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
//               Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

//               1914 translation by H. Rackham
//               "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
//               I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
//               the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
//               but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
//               Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
//               circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes
//               laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure
//               that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

//               Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
//               "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
//               quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
//               Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
//               facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
//               voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
//               perferendis doloribus asperiores repellat."

//               1914 translation by H. Rackham
//               "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,
//               so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will,
//               which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled
//               and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of
//               duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to
//               this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
//             </Typography>
//           </Container>
//         </Paper>
//       </Grid>
//       <Grid item xs={4}>
//         <Paper elevation={2} className={classes.leftSidebar}>
//           <div style={{display: 'flex', justifyContent: "center", flexWrap: "wrap"}}>
//             <Button variant="contained" color="primary">Bid Now</Button>
//             <Button variant="contained" color="secondary">Save</Button>
//           </div>
//         </Paper>
//       </Grid>
//     </Grid>
//   )
// })
