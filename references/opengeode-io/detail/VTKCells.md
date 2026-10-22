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

# class VTKCells


## Functions

### VTKCells

```cpp
public void VTKCells(std::vector<index_t> vertices, std::vector<int64_t> offsets)
```


### size

```cpp
public index_t size()
```


### operator[]

```cpp
public absl::Span<const index_t> operator[](index_t cell)
```




