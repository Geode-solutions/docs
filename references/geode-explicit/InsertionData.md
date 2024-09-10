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

# struct InsertionData


## Members

```cpp
public ExtractedMeshes extracted_meshes

```

```cpp
public MeshElements not_inserted_elements

```

```cpp
public INSERTION_STATUS insertion_status

```



## Enums

| enum class INSERTION_STATUS |

--

| nothing_inserted |
| some_inserted |
| all_inserted |
| none |





