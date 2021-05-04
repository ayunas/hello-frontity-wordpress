import React from 'react';
import {connect} from 'frontity';
import Link from '@frontity/components/link';



function List(props) {
    const {state} = props;
    const data = state.source.get(state.router.link);

    return (
        <div>
            {data.items.map(item => {
                const post = state.source[item.type][item.id];
                <div key={item.id}>{item.type} - {item.id} = {item.link}</div>
                return (
                    <Link key={item.id} link={post.link}>
                        {post.title.rendered}
                        <br/>
                    </Link>
                )
            })}
        </div>
    )

}

export default connect(List);