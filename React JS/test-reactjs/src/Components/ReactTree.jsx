import React from 'react';
import { Tree } from 'react-d3-tree';
// import CustomNode from './CustomNode';
import { node, svg } from 'react-d3-tree';

// Example data for the tree
const myTreeData = {
    name: 'Parent Node',
    children: [
        {
            name: 'Child Node 1',
            attributes: {
                image_url: 'https://example.com/image1.jpg',
                full_name: 'John Doe',
                position: 'Software Engineer',
                social_url: 'https://linkedin.com/in/johndoe',
            }
        },
        {
            name: 'Child Node 2',
            attributes: {
                image_url: 'https://example.com/image2.jpg',
                full_name: 'Jane Smith',
                position: 'Product Manager',
                social_url: 'https://linkedin.com/in/janesmith',
            }
        },
    ],
};

const CustomNode = ({ nodeData, connectors }) => {
    // const nodeClasses = classNames('flex items-center justify-between p-2 rounded-md', {
    //     'bg-gray-200': nodeData.depth === 0, // Adjust class for root node
    //     'bg-white': nodeData.depth > 0, // Adjust class for child nodes
    // });

    return (
        <node data={nodeData} connectors={connectors}>
            <svg>
                {/* Render image */}
                <image
                    href={nodeData?.image_url} // Replace with your image path
                    className="w-8 h-8 mr-2"
                    alt={nodeData?.full_name} // Set alt text for accessibility
                />

                {/* Render text with Tailwind classes */}
                <span className="text-sm font-medium">{nodeData?.position}</span>
            </svg>
        </node>
    );
};

const MyTree = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Tree
                data={myTreeData}
                orientation="vertical"
                // renderCustomNodeElement={({ nodeDatum }) => (
                //     <CustomNode nodeData={nodeDatum.attributes} />
                // )}
                getNodeContent={(nodeData) => <CustomNode nodeData={nodeData?.attributes} />}
            />
        </div>
    );
};

export default MyTree;
