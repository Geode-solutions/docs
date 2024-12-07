<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# namespace internal



## Records

* [AssimpMeshInput](AssimpMeshInput.md)
* [AssimpMeshOutput](AssimpMeshOutput.md)
* [BMPInput](BMPInput.md)
* [DXFInput](DXFInput.md)
* [GEXFOutput](GEXFOutput.md)
* [GMSHEdge](GMSHEdge.md)
* [GMSHElement](GMSHElement.md)
* [GMSHHexahedron](GMSHHexahedron.md)
* [GMSHPoint](GMSHPoint.md)
* [GMSHPrism](GMSHPrism.md)
* [GMSHPyramid](GMSHPyramid.md)
* [GMSHQuadrangle](GMSHQuadrangle.md)
* [GMSHSolidPolyhedron](GMSHSolidPolyhedron.md)
* [GMSHSurfacePolygon](GMSHSurfacePolygon.md)
* [GMSHTetrahedron](GMSHTetrahedron.md)
* [GMSHTriangle](GMSHTriangle.md)
* [GmshElementID](GmshElementID.md)
* [GmshId2Uuids](GmshId2Uuids.md)
* [ImageInputImpl](ImageInputImpl.md)
* [JPGInput](JPGInput.md)
* [MSHInput](MSHInput.md)
* [MSHOutput](MSHOutput.md)
* [OBJInput](OBJInput.md)
* [OBJPolygonalOutput](OBJPolygonalOutput.md)
* [OBJTriangulatedOutput](OBJTriangulatedOutput.md)
* [PLYInput](PLYInput.md)
* [PLYOutput](PLYOutput.md)
* [PNGInput](PNGInput.md)
* [SMESHCurveInput](SMESHCurveInput.md)
* [SMESHInputImpl](SMESHInputImpl.md)
* [SMESHTriangulatedInput](SMESHTriangulatedInput.md)
* [STLInput](STLInput.md)
* [STLOutput](STLOutput.md)
* [SVGInput](SVGInput.md)
* [TriangleOutput](TriangleOutput.md)


## Functions

### initialize_gmsh_factory

```cpp
void initialize_gmsh_factory()
```




