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

# namespace internal



## Records

* [ComponentElements](ComponentElements.md)
* [GeographicCoordinateTransformation](GeographicCoordinateTransformation.md)
* [PhysicalPropertyDescription](PhysicalPropertyDescription.md)
* [ValidRange](ValidRange.md)


## Functions

### for_each_component

```cpp
void for_each_component(const geode::BRep & model, const geode::ComponentType & type, const Action & action)
```


### physical_problem_region_blocks

```cpp
std::optional<std::vector<uuid>> physical_problem_region_blocks(const BRep & model, const uuid & region)
```


 Blocks of a problem region: the Block itself, or the items of a non-empty collection made only of Blocks (BlockCollection, StratigraphicUnit...). No value if the region is neither.

### physical_problem_block_materials

```cpp
absl::flat_hash_map<uuid, index_t> physical_problem_block_materials(const PhysicalProblem & problem, const BRep & model)
```


 Material index of each Block. Materials with regions are assigned first (the first one wins); the first material without region then covers every remaining Block. Invalid regions are skipped (they are reported by SimulationChecker::check_physical_problem_regions). Blocks covered by no material are not in the result.

### physical_problem_block_initial_conditions

```cpp
absl::flat_hash_map<uuid, index_t> physical_problem_block_initial_conditions(const PhysicalProblem & problem, const BRep & model)
```


 Initial condition index of each Block, assigned as materials are

### component_location

```cpp
SimulationIssueLocation component_location(const Component3D & component)
```


### count_string

```cpp
std::string count_string(std::size_t count, std::string_view noun)
```


### is_positive

```cpp
bool is_positive(double value)
```


### is_non_negative

```cpp
bool is_non_negative(double value)
```


### is_multiphase

```cpp
bool is_multiphase(const PhysicalProblem & problem)
```


### material_subject

```cpp
std::string material_subject(std::string_view name)
```


### initial_condition_subject

```cpp
std::string initial_condition_subject(index_t condition)
```


### property_reader_string

```cpp
std::string_view property_reader_string(PROPERTY_READER reader)
```


### reads

```cpp
bool reads(PROPERTY_READER reader, const PhysicalProblem & problem)
```


### physical_property_description

```cpp
const PhysicalPropertyDescription & physical_property_description(PHYSICAL_PROPERTY_NAME property)
```


### physical_property_descriptions

```cpp
absl::Span<const PhysicalPropertyDescription> physical_property_descriptions()
```




## Enums

| enum class PROPERTY_READER |

--

| flow |
| multiphase_flow |
| solid_mechanics |
| solid_mechanics_without_flow |
| poromechanics |
| thermal_poromechanics |



| enum class PROPERTY_VALUE_TYPES |

--

| scalar |
| vector3 |
| scalar_or_vector3 |





