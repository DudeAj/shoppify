import classes from './popup.module.css';

const PopUp = ({ confirm, cancel }) => {

  return (
    <div className={classes.Backdrop}>
      <div className={classes.popup}>
        <p>Are you sure that you want to cancel this list?</p>
        <div>
          <div className={classes.btn}>
            <button className={classes.cancel} onClick={cancel}>cancel</button>
            <button className={classes.yes} onClick={confirm}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp;
