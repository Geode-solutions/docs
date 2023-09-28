# class GenericMeshAccessor

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#149
```

```cpp
Inherits from GenericMeshAccessor<SurfaceMesh<dimension> >
```



# class GenericMeshAccessor

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#129
```

```cpp
Inherits from GenericMeshAccessor<SolidMesh<dimension> >
```



## Functions

### GenericMeshAccessor

```cpp
public void GenericMeshAccessor<TetrahedralSolid<dimension> >(const TetrahedralSolid<dimension> & mesh)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#141
```

### element

```cpp
public Tetrahedron element(index_t tetrahedron_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#146
```



# class GenericMeshAccessor

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#42
```

## Functions

### GenericMeshAccessor

```cpp
public void GenericMeshAccessor<SurfaceMesh<> >(const SurfaceMesh<dimension> & mesh)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#51
```

### nb_elements

```cpp
public index_t nb_elements()
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#56
```

### nb_element_vertices

```cpp
public index_t nb_element_vertices(index_t polygon_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#61
```

### nb_element_facets

```cpp
public index_t nb_element_facets(index_t polygon_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#66
```

### element_vertex

```cpp
public index_t element_vertex(const ElementVertex & polygon_vertex)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#71
```

### element_vertices

```cpp
public ElementVertices element_vertices(index_t polygon_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#76
```

### element_barycenter

```cpp
public Point<dimension> element_barycenter(index_t polygon_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#81
```

### element_facet_vertices

```cpp
public ElementFacetVertices element_facet_vertices(const ElementFacet & polygon_edge)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#86
```

### element_adjacent

```cpp
public absl::optional<index_t> element_adjacent(const ElementFacet & polygon_edge)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#92
```

### element_adjacent_facet

```cpp
public absl::optional<ElementFacet> element_adjacent_facet(const ElementFacet & polygon_edge)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#98
```

### id

```cpp
public const uuid & id()
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#104
```

### point

```cpp
public const Point<dimension> & point(index_t vertex_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#109
```

### element_attribute_manager

```cpp
public AttributeManager & element_attribute_manager()
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#114
```



# class GenericMeshAccessor

# class GenericMeshAccessor

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#123
```

```cpp
Inherits from GenericMeshAccessor<SurfaceMesh<dimension> >
```



## Functions

### GenericMeshAccessor

```cpp
public void GenericMeshAccessor<TriangulatedSurface<dimension> >(const TriangulatedSurface<dimension> & mesh)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#135
```

### element

```cpp
public Element element(index_t triangle_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_surface_accessor.h#140
```



# class GenericMeshAccessor

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#155
```

```cpp
Inherits from GenericMeshAccessor<SolidMesh<dimension> >
```



# class GenericMeshAccessor

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#42
```

## Functions

### GenericMeshAccessor

```cpp
public void GenericMeshAccessor<SolidMesh<> >(const SolidMesh<dimension> & mesh)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#51
```

### nb_elements

```cpp
public index_t nb_elements()
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#56
```

### nb_element_vertices

```cpp
public index_t nb_element_vertices(index_t polyhedron_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#61
```

### nb_element_facets

```cpp
public index_t nb_element_facets(index_t polyhedron_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#66
```

### element_vertex

```cpp
public index_t element_vertex(const ElementVertex & polyhedron_vertex)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#71
```

### element_vertices

```cpp
public ElementVertices element_vertices(index_t polyhedron_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#76
```

### element_barycenter

```cpp
public Point<dimension> element_barycenter(index_t polyhedron_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#81
```

### element_facet_vertices

```cpp
public ElementFacetVertices element_facet_vertices(const ElementFacet & polyhedron_facet)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#86
```

### element_adjacent

```cpp
public absl::optional<index_t> element_adjacent(const ElementFacet & polyhedron_facet)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#92
```

### element_adjacent_facet

```cpp
public absl::optional<ElementFacet> element_adjacent_facet(const ElementFacet & polyhedron_facet)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#98
```

### id

```cpp
public const uuid & id()
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#104
```

### point

```cpp
public const Point<dimension> & point(index_t vertex_id)
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#109
```

### element_attribute_manager

```cpp
public AttributeManager & element_attribute_manager()
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#114
```

### mesh

```cpp
protected const SolidMesh<dimension> & mesh()
```

```cpp
Defined at ../../include/geode/mesh/helpers/generic_solid_accessor.h#120
```



