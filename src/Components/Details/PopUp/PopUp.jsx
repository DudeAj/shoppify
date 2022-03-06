import classes from './popup.module.css';

export const PopUp = () => {
  return (
    <div className={classes.popup}>
        <p>Are you sure that you want to cancel this list?</p>
        <div>
            <div className={classes.btn}>
                <button className={classes.cancel}>cancel</button>
                <button className={classes.yes}>Yes</button>
            </div>
        </div>
    </div>
  )
}
