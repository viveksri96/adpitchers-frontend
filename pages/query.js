import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import { useFormik } from "formik";
import * as yup from "yup";

const styles = {
  root: {},
};

const validationSchema = yup.object();

const Query = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => JSON.stringify(values),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="desc"
          name="desc"
          label="Description"
          value={formik.values.desc}
          onChange={formik.handleChange}
          error={formik.touched.desc && Boolean(formik.errors.desc)}
          helperText={formik.touched.desc && formik.errors.desc}
        />
      </form>
    </div>
  );
};

export default withStyles(styles)(Query);
