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

# class FieldLine


## Functions

### FieldLine

```cpp
public void FieldLine(const Impl & impl)
```


### compute_line

```cpp
public int compute_line(index_t origin, local_index_t direction, signed_index_t orientation)
```




