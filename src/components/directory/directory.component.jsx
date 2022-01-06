import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

const Directory = ({sections}) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySections
})

/* this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}  linkUrl={linkUrl}/>
)) */
export default connect(mapStateToProps)(Directory);