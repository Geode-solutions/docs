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

# class GenericMeshAccessor


```cpp
Inherits from GenericMeshAccessor<SurfaceMesh<dimension> >
```



# class GenericMeshAccessor


```cpp
Inherits from GenericMeshAccessor<SolidMesh<dimension> >
```



## Functions

### GenericMeshAccessor

```cpp
public void GenericMeshAccessor<TetrahedralSolid<> >(const TetrahedralSolid<dimension> & mesh)
```


### element

```cpp
public Tetrahedron element(index_t tetrahedron_id)
```




# class GenericMeshAccessor


## Functions

### GenericMeshAccessor

```cpp
public void GenericMeshAccessor<SurfaceMesh<> >(const SurfaceMesh<dimension> & mesh)
```


### nb_vertices

```cpp
public index_t nb_vertices()
```


### nb_elements

```cpp
public index_t nb_elements()
```


### nb_element_vertices

```cpp
public index_t nb_element_vertices(index_t polygon_id)
```


### nb_element_facets

```cpp
public index_t nb_element_facets(index_t polygon_id)
```


### element_index

```cpp
public index_t element_index(const ElementFacet & polygon_edge)
```


### facet_index

```cpp
public index_t facet_index(const ElementFacet & polygon_edge)
```


### element_vertex

```cpp
public index_t element_vertex(const ElementVertex & polygon_vertex)
```


### element_vertices

```cpp
public InlinedVector element_vertices(index_t polygon_id)
```


### element_barycenter

```cpp
public Point<dimension> element_barycenter(index_t polygon_id)
```


### element_facet_vertices

```cpp
public array element_facet_vertices(const ElementFacet & element_facet)
```


### element_adjacent

```cpp
public optional element_adjacent(const ElementFacet & element_facet)
```


### element_adjacent_facet

```cpp
public optional element_adjacent_facet(const ElementFacet & element_facet)
```


### id

```cpp
public const uuid & id()
```


### point

```cpp
public const Point<dimension> & point(index_t vertex_id)
```


### element_attribute_manager

```cpp
public AttributeManager & element_attribute_manager()
```




# class GenericMeshAccessor

# class GenericMeshAccessor


```cpp
Inherits from GenericMeshAccessor<SurfaceMesh<dimension> >
```



## Functions

### GenericMeshAccessor

```cpp
public void GenericMeshAccessor<TriangulatedSurface<> >(const TriangulatedSurface<dimension> & mesh)
```


### element

```cpp
public Element element(index_t triangle_id)
```




# class GenericMeshAccessor


```cpp
Inherits from GenericMeshAccessor<SolidMesh<dimension> >
```



# class GenericMeshAccessor


## Functions

### GenericMeshAccessor

```cpp
public void GenericMeshAccessor<SolidMesh<dimension> >(const SolidMesh<dimension> & mesh)
```


### nb_vertices

```cpp
public index_t nb_vertices()
```


### nb_elements

```cpp
public index_t nb_elements()
```


### nb_element_vertices

```cpp
public index_t nb_element_vertices(index_t polyhedron_id)
```


### nb_element_facets

```cpp
public index_t nb_element_facets(index_t polyhedron_id)
```


### element_index

```cpp
public index_t element_index(const ElementFacet & polyhedron_facet)
```


### facet_index

```cpp
public index_t facet_index(const ElementFacet & polyhedron_facet)
```


### element_vertex

```cpp
public index_t element_vertex(const ElementVertex & polyhedron_vertex)
```


### element_vertices

```cpp
public InlinedVector element_vertices(index_t polyhedron_id)
```


### element_barycenter

```cpp
public Point<dimension> element_barycenter(index_t polyhedron_id)
```


### element_facet_vertices

```cpp
public InlinedVector element_facet_vertices(const ElementFacet & element_facet)
```


### element_adjacent

```cpp
public optional element_adjacent(const ElementFacet & element_facet)
```


### element_adjacent_facet

```cpp
public optional element_adjacent_facet(PolyhedronFacet element_facet)
```


### id

```cpp
public const uuid & id()
```


### point

```cpp
public const Point<dimension> & point(index_t vertex_id)
```


### element_attribute_manager

```cpp
public AttributeManager & element_attribute_manager()
```


### mesh

```cpp
protected const SolidMesh<dimension> & mesh()
```




