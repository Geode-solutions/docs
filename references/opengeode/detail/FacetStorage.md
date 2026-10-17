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

# class FacetStorage


## Functions

### is_opposite

```cpp
public bool is_opposite(index_t facet_id, const VertexContainer & vertices)
```


### FacetStorage

```cpp
protected void FacetStorage<VertexContainer>(BITSERY )
```


### FacetStorage

```cpp
protected void FacetStorage<VertexContainer>()
```


### facet_attribute_manager

```cpp
protected AttributeManager & facet_attribute_manager()
```


### reserve

```cpp
protected void reserve(index_t capacity)
```


 Reserve memory for the given total number of facets

### find_facet

```cpp
protected std::optional<index_t> find_facet(TypedVertexCycle vertices)
```


### add_facet

```cpp
protected index_t add_facet(TypedVertexCycle vertices)
```


### remove_facet

```cpp
protected index_t remove_facet(TypedVertexCycle vertices)
```


### clean_facets

```cpp
protected std::vector<index_t> clean_facets()
```


### delete_facets

```cpp
protected std::vector<index_t> delete_facets(const std::vector<bool> & to_delete)
```


### update_facet_vertex

```cpp
protected geode::BijectiveMapping<index_t> update_facet_vertex(VertexContainer facet_vertices, const index_t facet_vertex_id, const index_t new_vertex_id)
```


### update_facet_vertices

```cpp
protected std::vector<index_t> update_facet_vertices(absl::Span<const index_t> old2new)
```


 Update facet vertices with the given vertex mapping. Facets using a vertex mapped to NO_ID are deleted. Facets becoming identical are merged into the one with the smallest index: their counters are summed up and the other facets are deleted. In the returned mapping, a merged facet is mapped to the new index of the facet it was merged into.

### get_facet_vertices

```cpp
protected const VertexContainer & get_facet_vertices(index_t facet_id)
```


### get_counter

```cpp
protected index_t get_counter(index_t facet_id)
```


### overwrite

```cpp
protected void overwrite(const FacetStorage<VertexContainer> & from)
```




