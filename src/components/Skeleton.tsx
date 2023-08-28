import React from 'react'
import ContentLoader from 'react-content-loader'
import '../scss/skeleton.scss'

const Skeleton = () => (
    <div className="skele">
        <ContentLoader
            speed={2}
            width={470}
            height={520}
            viewBox="0 0 470 520"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="4" y="408" rx="0" ry="0" width="239" height="23" />
            <rect x="75" y="447" rx="0" ry="0" width="78" height="20" />
            <rect x="0" y="3" rx="0" ry="0" width="252" height="386" />
        </ContentLoader>
    </div>
)

export default Skeleton
