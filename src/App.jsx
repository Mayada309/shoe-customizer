/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import './index.css';
import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/shoe.gltf');
  return (
    <group ref={group} {...props} dispose={null} scale={3} >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={'white'} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.main} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={'black'} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={'grey'} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={'black'} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={'black'} />
    </group>
  );
}

function App() {

  const ref = useRef();

  const [main, setMain] = useState('');
  const [stripes, setStripes] = useState('');
  const [sole, setSole] = useState('');


  return (
    <>
      <div className="app">

        <div className="container">
          <div className="production-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={3} />
                <spotLight
                  intensity={1}
                  angle={0.3}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow />
                <Model main={main} stripes={stripes} sole={sole} />
                <OrbitControls enablePan enableRotate enableZoom />
              </Suspense>
            </Canvas>
          </div>
          <div className="controls">
            <h3>Color Controls</h3>
            <div className="options">

              <div className="color-option">
                <label htmlFor="head">Main</label>
                <input
                  type="color"
                  value={main}
                  name="head"
                  id="head"
                  onChange={(e) => setMain(e.target.value)}
                />
              </div>
              <div className="color-option">
                <label htmlFor="body">Stripes</label>
                <input
                  type="color"
                  value={stripes}
                  name="body"
                  id="body"
                  onChange={(e) => setStripes(e.target.value)}
                />
              </div>
              <div className="color-option">
                <label htmlFor="body">Sole</label>
                <input
                  type="color"
                  value={sole}
                  name="body"
                  id="body"
                  onChange={(e) => setSole(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

