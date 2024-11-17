// import React, { useState, useEffect } from 'react';
// import './Resources.css';
// import ResourceCard from '../../components/ResourceCard';
// import SearchBar from '../../components/SearchBar';
// import DiscussionForum from '../../components/DiscussionForum';
// import NewDiscussion from '../../components/NewDiscussion';

// function Resources() {
//   const [resources, setResources] = useState([]);
//   const [discussions, setDiscussions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resourcesResponse = await fetch('/api/resources');
//         if (!resourcesResponse.ok) {
//           throw new Error('Network response was not ok ' + resourcesResponse.statusText);
//         }
//         const resourcesData = await resourcesResponse.json();
//         setResources(resourcesData);

//         const discussionsResponse = await fetch('/api/discussions');
//         if (!discussionsResponse.ok) {
//           throw new Error('Network response was not ok ' + discussionsResponse.statusText);
//         }
//         const discussionsData = await discussionsResponse.json();
//         setDiscussions(discussionsData);

//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} resources={resources} />
//       <div className="resource-grid">
//         {resources.length > 0 ? (
//           resources.map(resource => (
//             <ResourceCard key={resource._id} resource={resource} />
//           ))
//         ) : (
//           <div>No resources found</div>
//         )}
//       </div>
//       <DiscussionForum discussions={discussions} />
//       <NewDiscussion />
//     </div>
//   );
// }

// export default Resources;
// ``````````````````````