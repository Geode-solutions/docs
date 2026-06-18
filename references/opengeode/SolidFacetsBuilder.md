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

# class SolidFacetsBuilder


 Interface class to represent the builder of a SolidFacets



## Functions

### SolidFacetsBuilder

```cpp
public void SolidFacetsBuilder<value-parameter-0-0>(SolidFacets<dimension> & facets)
```


### SolidFacetsBuilder

```cpp
public void SolidFacetsBuilder<value-parameter-0-0>(SolidFacetsBuilder<dimension> && )
```


### delete_isolated_facets

```cpp
public std::vector<index_t> delete_isolated_facets()
```


 Delete all the isolated facets (not used as polyhedron facets)

**return** the mapping between old facet indices to new ones. Deleted facets new index is NO_ID

### find_or_create_facet

```cpp
public index_t find_or_create_facet(PolyhedronFacetVertices facet_vertices)
```


### delete_facets

```cpp
public std::vector<index_t> delete_facets(const std::vector<bool> & to_delete)
```


### remove_facet

```cpp
public void remove_facet(PolyhedronFacetVertices facet_vertices)
```


### update_facet_vertex

```cpp
public geode::BijectiveMapping<index_t> update_facet_vertex(PolyhedronFacetVertices facet_vertices, index_t facet_vertex_id, index_t new_vertex_id)
```


### update_facet_vertices

```cpp
public std::vector<index_t> update_facet_vertices(absl::Span<const index_t> old2new)
```


### copy

```cpp
public void copy(const SolidFacets<dimension> & facets)
```




# class SolidFacetsBuilder


