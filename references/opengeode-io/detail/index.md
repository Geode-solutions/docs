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

# namespace detail



## Records

* [DotPolygonalOutput](DotPolygonalOutput.md)
* [DotSurfaceOutputImpl](DotSurfaceOutputImpl.md)
* [DotTriangulatedOutput](DotTriangulatedOutput.md)
* [VTIGridInputImpl](VTIGridInputImpl.md)
* [VTIGridOutputImpl](VTIGridOutputImpl.md)
* [VTILightRegularGridInput](VTILightRegularGridInput.md)
* [VTILightRegularGridOutput](VTILightRegularGridOutput.md)
* [VTIOutputImpl](VTIOutputImpl.md)
* [VTIRasterImageOutput](VTIRasterImageOutput.md)
* [VTIRegularGridInput](VTIRegularGridInput.md)
* [VTIRegularGridOutput](VTIRegularGridOutput.md)
* [VTKInputImpl](VTKInputImpl.md)
* [VTKMeshInputImpl](VTKMeshInputImpl.md)
* [VTKMeshOutputImpl](VTKMeshOutputImpl.md)
* [VTKOutputImpl](VTKOutputImpl.md)
* [VTMBRepOutput](VTMBRepOutput.md)
* [VTMOutputImpl](VTMOutputImpl.md)
* [VTMSectionOutput](VTMSectionOutput.md)
* [VTPEdgedCurveOutput](VTPEdgedCurveOutput.md)
* [VTPInput](VTPInput.md)
* [VTPPointSetOutput](VTPPointSetOutput.md)
* [VTPPolygonalOutput](VTPPolygonalOutput.md)
* [VTPSurfaceOutputImpl](VTPSurfaceOutputImpl.md)
* [VTPTriangulatedOutput](VTPTriangulatedOutput.md)
* [VTUHybridInput](VTUHybridInput.md)
* [VTUHybridOutput](VTUHybridOutput.md)
* [VTUInputImpl](VTUInputImpl.md)
* [VTUOutputImpl](VTUOutputImpl.md)
* [VTUPolyhedralInput](VTUPolyhedralInput.md)
* [VTUPolyhedralOutput](VTUPolyhedralOutput.md)
* [VTUTetrahedralInput](VTUTetrahedralInput.md)
* [VTUTetrahedralOutput](VTUTetrahedralOutput.md)


## Functions

### write_point

```cpp
void write_point(std::string & string, const Point<dimension> & point)
```




