import Grid from '@mui/material/Grid';
import './Articles.css'

function Item({ children }) {
  return (
    <div style={{ 
      padding: '16px', 
      backgroundColor: '#8cf12cff', 
      border: '1px solid #ddd',
      borderRadius: '4px',
      height: '100%', 
      minHeight: '32vh' 

    }}>
      {children}
    </div>
  );
}

function Articles() {
    return(
         <Grid container spacing={10} sx = {{
            height: '60%', 
           width: '100%',
           padding: '32px', 
        boxSizing: 'border-box'
         }}>
  <Grid size={6}>
    <Item>size=8</Item>
  </Grid>
  <Grid size={6}>
    <Item>size=4</Item>
  </Grid>
  <Grid size={6}>
    <Item>size=4</Item>
  </Grid>
  <Grid size={6}>
    <Item>size=8</Item>
  </Grid>
</Grid>
      
    );
}

export default Articles