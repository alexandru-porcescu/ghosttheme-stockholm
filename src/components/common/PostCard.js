import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (<Link to={url} className="post-preview">
            <header className="post-head">
                {
                    post.feature_image && <div className="post-image" style={{
                        backgroundImage: `url(${ post.feature_image })`
                    }}></div>
                }
                {
                    post.tags && <div className="post-tags">
                        <Tags post={post} visibility="public" autolink={false}/></div>
                }
                {post.featured && <span>Featured</span>}
                <h2 className="post-title">{post.title}</h2>
            </header>
            <section className="post-excerpt">{post.excerpt}</section>
            <footer className="post-footer">
                <div className="post-footer-left">
                    <div className="post-avatar meta-item author">
                        {
                            post.primary_author.profile_image
                                ? <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/>
                                : <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                        }
                    </div>
                    <span>{post.primary_author.name}</span>
                </div>
                <div className="post-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer>
    </Link>)
}

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({ name: PropTypes.string.isRequired, profile_image: PropTypes.string }).isRequired
    }).isRequired
}

export default PostCard
