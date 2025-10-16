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

# class FacetsModifier


## Functions

### FacetsModifier

```cpp
public void FacetsModifier(const FacetsModifier & )
```


### operator=

```cpp
public FacetsModifier & operator=(const FacetsModifier & )
```


### ~FacetsModifier

```cpp
public void ~FacetsModifier()
```


### updated_facet

```cpp
public const SmallSet<index_t> & updated_facet(index_t facet_id)
```


### set_updated_facet

```cpp
public void set_updated_facet(const FacetMapping & mapping)
```


### FacetsModifier

```cpp
protected void FacetsModifier()
```


### FacetsModifier

```cpp
protected void FacetsModifier(FacetsModifier && other)
```


### operator=

```cpp
protected FacetsModifier & operator=(FacetsModifier && other)
```


### clean_facets_modifier

```cpp
protected void clean_facets_modifier()
```


### facets_clean_stamp

```cpp
protected index_t facets_clean_stamp()
```




