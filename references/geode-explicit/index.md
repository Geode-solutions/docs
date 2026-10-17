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

# namespace geode



## Namespaces

* [internal](internal/index.md)


## Records

* [BRepExplicitModelerParameters](BRepExplicitModelerParameters.md)
* [BRepExplicitModelerRemainingException](BRepExplicitModelerRemainingException.md)
* [BRepExplicitModeler](BRepExplicitModeler.md)
* [BRepSolidModeler](BRepSolidModeler.md)
* [BRepVolumicInserter](BRepVolumicInserter.md)
* [ElementGraph](ElementGraph.md)
* [GeodeExplicitBRepException](GeodeExplicitBRepException.md)
* [GeodeExplicitBRepLibrary](GeodeExplicitBRepLibrary.md)
* [GeodeExplicitCommonException](GeodeExplicitCommonException.md)
* [GeodeExplicitCommonLibrary](GeodeExplicitCommonLibrary.md)
* [GeodeExplicitException](GeodeExplicitException.md)
* [GeodeExplicitSectionException](GeodeExplicitSectionException.md)
* [GeodeExplicitSectionLibrary](GeodeExplicitSectionLibrary.md)
* [GeodeExplicitWorkflowsException](GeodeExplicitWorkflowsException.md)
* [GeodeExplicitWorkflowsLibrary](GeodeExplicitWorkflowsLibrary.md)
* [MeshElements](MeshElements.md)
* [Meshes](Meshes.md)
* [ModelMappings](ModelMappings.md)
* [ModifiableObject](ModifiableObject.md)
* [SectionExplicitModeler](SectionExplicitModeler.md)
* [uuid](uuid.md)


## Functions

### output_mesh

```cpp
void output_mesh(const TriangulatedSurface3D & mesh)
```


### build_brep_from_topography_and_curve

```cpp
BRep build_brep_from_topography_and_curve(const TriangulatedSurface3D & topography, const EdgedCurve2D & curve, const double bottom_surface_depth)
```


### inspect_generated_brep

```cpp
void inspect_generated_brep(const BRep & brep)
```


### inspect_generated_brep_without_block_topology

```cpp
void inspect_generated_brep_without_block_topology(const BRep & brep)
```


### add_mesh_elements

```cpp
void add_mesh_elements(MeshElements & to_elements, const MeshElements & from_elements)
```


### keep_component

```cpp
void keep_component(BRepExplicitModelerParameters & parameters, const ComponentID & component_id)
```


 Add the component to the components to keep. Every other Corner, Line and Surface not kept is removed.

### keep_only_surfaces

```cpp
void keep_only_surfaces(BRepExplicitModelerParameters & parameters, const BRep & brep)
```


 Keep only the Surfaces of the BRep: its Corners and Lines are removed and recomputed by the modeler from the Surfaces. Use keep_component to also keep some Corners or Lines.



