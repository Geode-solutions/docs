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

# class PhysicalProblemBuilder


 Edits a PhysicalProblem. Polymorphic objects (flow, fluid, laws, initial conditions) are shared, not copied: do not modify them after handing them to the builder. Removing a material, an initial condition or a source term shifts the indices of the following ones down by one.



```cpp
Inherits from IdentifierBuilder
```



## Functions

### PhysicalProblemBuilder

```cpp
public void PhysicalProblemBuilder(PhysicalProblem & problem)
```


### copy

```cpp
public void copy(const PhysicalProblem & other)
```


### set_model_id

```cpp
public void set_model_id(const uuid & model_id)
```


### PhysicalProblemBuilder

```cpp
public void PhysicalProblemBuilder(const PhysicalProblemBuilder & )
```


### operator=

```cpp
public PhysicalProblemBuilder & operator=(const PhysicalProblemBuilder & )
```


### set_flow

```cpp
public void set_flow(std::shared_ptr<FlowModel> flow)
```


### PhysicalProblemBuilder

```cpp
public void PhysicalProblemBuilder(PhysicalProblemBuilder && )
```


### set_thermal

```cpp
public void set_thermal(const ThermalParameters & thermal)
```


 Solves the energy equation. Problems are isothermal by default.

### add_material

```cpp
public index_t add_material(Material material)
```


### set_material

```cpp
public void set_material(index_t material_id, Material material)
```


### remove_material

```cpp
public void remove_material(index_t material_id)
```


### add_initial_condition

```cpp
public index_t add_initial_condition(std::shared_ptr<InitialCondition> initial_condition)
```


### remove_initial_condition

```cpp
public void remove_initial_condition(index_t initial_condition_id)
```


### add_source_term

```cpp
public index_t add_source_term(SourceTerm source_term)
```


### remove_source_term

```cpp
public void remove_source_term(index_t source_term_id)
```


### set_schedule

```cpp
public void set_schedule(const Schedule & schedule)
```


### set_output

```cpp
public void set_output(OutputSettings output)
```


### set_gravity

```cpp
public void set_gravity(const Vector3D & gravity)
```


### set_solver_option

```cpp
public void set_solver_option(std::string_view simulator, std::string_view key, std::string_view value)
```




