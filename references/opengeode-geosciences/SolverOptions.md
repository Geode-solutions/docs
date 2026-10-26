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

# class SolverOptions


 Simulator-specific numerical settings, stored as text per simulator (e.g. simulator "geos", key "nonlinear/newtonTol", value "1e-6"). Each simulator writer documents its keys.



## Functions

### set

```cpp
public void set(std::string_view simulator, std::string_view key, std::string_view value)
```


### get

```cpp
public std::optional<std::string_view> get(std::string_view simulator, std::string_view key)
```


### options

```cpp
public const std::map<std::string, std::string, std::less<>> & options(std::string_view simulator)
```


 Options of the simulator, sorted by key (empty if none)



