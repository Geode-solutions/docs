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

# struct BlockImplicitInfo


## Members

```cpp
public uuid block_uuid

```

```cpp
public bool mesh_created_inside

```



## Functions

### BlockImplicitInfo

```cpp
public void BlockImplicitInfo(const uuid & block_uuid_in, bool mesh_created_inside_in)
```




