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
* [CSVInput](CSVInput.md)
* [DXFInput](DXFInput.md)
* [GEXFOutput](GEXFOutput.md)
* [GIDOutput](GIDOutput.md)
* [GmshElementID](GmshElementID.md)
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
* [PVDAttributesTransfer](PVDAttributesTransfer.md)
* [PVDBRepTimeSeriesInput](PVDBRepTimeSeriesInput.md)
* [PVDDatasetMappings](PVDDatasetMappings.md)
* [PVDPointSets](PVDPointSets.md)
* [SMESHCurveInput](SMESHCurveInput.md)
* [SMESHInputImpl](SMESHInputImpl.md)
* [SMESHTriangulatedInput](SMESHTriangulatedInput.md)
* [STLInput](STLInput.md)
* [STLOutput](STLOutput.md)
* [SVGInput](SVGInput.md)
* [TIFFInput](TIFFInput.md)
* [TriangleOutput](TriangleOutput.md)


## Functions

### append_double

```cpp
void append_double(std::string & buffer, double value)
```


 Appends the shortest text representation of a double that reads back to the same value.

### AbslHashValue

```cpp
H AbslHashValue(H h, const GmshElementID & gmsh_id)
```


### append_point

```cpp
void append_point(std::string & buffer, const Point<dimension> & point)
```


 Appends the point coordinates separated by spaces.

### point_string

```cpp
const std::string & point_string(std::string & buffer, const Point<dimension> & point)
```


 Returns the point coordinates separated by spaces, reusing the given buffer to avoid allocations.

### create_pvd_point_sets

```cpp
PVDPointSets create_pvd_point_sets(absl::Span<const std::unique_ptr<SolidMesh3D>> meshes)
```


 Create the .pvd point sets from the datasets of a time step (e.g. one per GEOS region and per MPI rank): the dataset vertices, colocated ones merged, and the dataset polyhedron barycenters, with the mappings of each dataset to them.



