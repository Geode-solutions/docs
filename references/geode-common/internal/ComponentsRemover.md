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

# class ComponentsRemover


## Functions

### ComponentsRemover

```cpp
public void ComponentsRemover(geode::BRep & model, const geode::RemoveComponentsOptions & options)
```


### ComponentsRemover

```cpp
public void ComponentsRemover(const ComponentsRemover & )
```


### ComponentsRemover

```cpp
public void ComponentsRemover(ComponentsRemover && )
```


### get_block_to_remove

```cpp
public std::optional<uuid> get_block_to_remove()
```

### get_surface_to_remove

```cpp
public std::optional<uuid> get_surface_to_remove()
```

### get_line_to_remove

```cpp
public std::optional<uuid> get_line_to_remove()
```

### get_corner_to_remove

```cpp
public std::optional<uuid> get_corner_to_remove()
```

### operator=

```cpp
public ComponentsRemover & operator=(const ComponentsRemover & )
```


### operator=

```cpp
public ComponentsRemover & operator=(ComponentsRemover && )
```


### remove_components

```cpp
public void remove_components()
```


### model

```cpp
protected const BRep & model()
```


### builder

```cpp
protected BRepBuilder & builder()
```


### ~ComponentsRemover

```cpp
public void ~ComponentsRemover()
```


### have_same_incidences

```cpp
protected bool have_same_incidences(const ComponentType & component_1, const ComponentType & component_2)
```


### component_embeddings

```cpp
protected std::vector<uuid> component_embeddings(const uuid & component_id)
```


### are_part_of_same_collections

```cpp
protected bool are_part_of_same_collections(const uuid & component_1, const uuid & component_2)
```




