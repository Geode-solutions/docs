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

# class UnnecessaryComponentsRemover


```cpp
Inherits from ComponentsRemover
```



## Functions

### UnnecessaryComponentsRemover

```cpp
public void UnnecessaryComponentsRemover(geode::BRep & model, const RemoveComponentsOptions & options, absl::Span<const uuid> top_surfaces, absl::Span<const uuid> bottom_surfaces)
```


### get_block_to_remove

```cpp
public std::optional<geode::uuid> get_block_to_remove()
```


### get_surface_to_remove

```cpp
public std::optional<geode::uuid> get_surface_to_remove()
```


### get_line_to_remove

```cpp
public std::optional<geode::uuid> get_line_to_remove()
```


### get_corner_to_remove

```cpp
public std::optional<geode::uuid> get_corner_to_remove()
```




