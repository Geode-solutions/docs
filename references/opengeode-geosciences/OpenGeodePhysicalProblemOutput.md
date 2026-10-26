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

# class OpenGeodePhysicalProblemOutput


```cpp
Inherits from PhysicalProblemOutput
```



## Functions

### OpenGeodePhysicalProblemOutput

```cpp
public void OpenGeodePhysicalProblemOutput(std::string_view filename)
```


### write

```cpp
public std::vector<std::string> write(const PhysicalProblem & problem)
```




