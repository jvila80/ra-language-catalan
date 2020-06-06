import { TranslationMessages } from "ra-core";

const catalanMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: "Afegir filtre",
      add: "Afegiu",
      back: "Torna",
      bulk_actions:
        "1 element seleccionat |||| %{smart_count} elements seleccionats",
      cancel: "Cancel · lar",
      clear_input_value: "Valor clar",
      clone: "Clon",
      confirm: "Confirmeu",
      create: "Crear",
      delete: "Suprimeix",
      edit: "Edita",
      export: "Exporta",
      list: "Llista",
      refresh: "Actualització",
      remove_filter: "Elimina aquest filtre",
      remove: "Elimina",
      save: "Desa",
      search: "Cerca",
      show: "Espectacle",
      sort: "Ordena",
      undo: "Desfer",
      unselect: "Deselect",
      expand: "Ampliar",
      close: "Tanca",
      open_menu: "Obre el menú",
      close_menu: "Tanca el menú"
    },
    boolean: { true: "Sí", false: "No", null: "" },
    page: {
      create: "Crear %{name}",
      dashboard: "panell",
      edit: " %{name} # %{id}",
      error: "Alguna cosa ha anat malament",
      list: "%{name}",
      loading: "Carregant",
      not_found: "No trobat",
      show: " %{name} # %{id}",
      empty: "Encara no hi ha %{name}.",
      invite: "Voleu afegir-ne un?"
    },
    input: {
      file: {
        upload_several:
          "Desplaceu alguns fitxers per penjar-los o feu clic per seleccionar-ne un.",
        upload_single:
          "Desplegueu un fitxer per penjar-lo o feu clic per seleccionar-lo."
      },
      image: {
        upload_several:
          "Desplaceu algunes imatges per penjar-les o feu clic per seleccionar-ne una.",
        upload_single:
          "Desplaceu una imatge per penjar-la o feu clic per seleccionar-la."
      },
      references: {
        all_missing: "No es poden trobar dades de referències.",
        many_missing:
          "Almenys una de les referències associades ja no està disponible.",
        single_missing: "La referència associada ja no està disponible."
      },
      password: {
        toggle_visible: "Amagueu la contrasenya",
        toggle_hidden: "Ensenya la contrasenya"
      }
    },
    message: {
      about: "Sobre",
      are_you_sure: "Estàs segur?",
      bulk_delete_content:
        "Confirmeu que voleu suprimir aquest %{name}? |||| Confirmeu que voleu suprimir aquests %{smart_count} articles?",
      bulk_delete_title:
        "Suprimeix %{name} |||| Suprimeix %{smart_count} %{name}",
      delete_content: "Esteu segur que voleu suprimir aquest element?",
      delete_title: "Suprimeix %{name} # %{id}",
      details: "Detalls",
      error:
        "S'ha produït un error del client i no s'ha pogut completar la sol·licitud.",
      invalid_form: "El formulari no és vàlid. Comproveu que hi hagi errors",
      loading: "La pàgina es carrega, només un moment",
      no: "No",
      not_found:
        "O bé heu escrit un URL incorrecte, o bé heu seguit un enllaç dolent.",
      yes: "Sí",
      unsaved_changes:
        "Alguns dels canvis no s'han desat. Esteu segur que voleu ignorar-les?"
    },
    navigation: {
      no_results: "Sense resultats",
      no_more_results:
        "El número de pàgina %{page} està fora de límits. Proveu la pàgina anterior.",
      page_out_of_boundaries: "Número de pàgina %{pàgina} fora de límits",
      page_out_from_end: "No es pot passar després de la darrera pàgina",
      page_out_from_begin: "No es pot anar abans de la pàgina 1",
      page_range_info: " %{offsetBegin} - %{offsetEnd} de %{total}",
      page_rows_per_page: "Línies per pàgina:",
      next: "Pròxim",
      prev: "Anterior"
    },
    auth: {
      auth_check_error: "Inicieu la sessió per continuar",
      user_menu: "Perfil",
      username: "Nom d'usuari",
      password: "Contrasenya",
      sign_in: "Inicieu la sessió",
      sign_in_error: "Fallada l'autenticació. Torna a intentar-ho",
      logout: "Tancar sessió"
    },
    notification: {
      updated: "Element actualitzat |||| %{smart_count} elements actualitzats",
      created: "Element creat",
      deleted:
        "Element suprimit |||| S'han suprimit els elements %{smart_count}",
      bad_item: "Element incorrecte",
      item_doesnt_exist: "L’element no existeix",
      http_error: "Error de comunicació del servidor",
      data_provider_error:
        "Error de dataProvider Consulteu els detalls de la consola.",
      i18n_error:
        "No es poden carregar les traduccions per a l'idioma especificat",
      canceled: "S'ha cancel·lat l'acció",
      logged_out: "La vostra sessió ha finalitzat. Torneu-vos a connectar."
    },
    validation: {
      required: "Obligatori",
      minLength: "Com a mínim han de tenir-hi %{min} caràcters",
      maxLength: "Ha de tenir un màxim de %{max} caràcters o menys",
      minValue: "Ha de ser almenys %{min}",
      maxValue: "Ha de ser %{max} o menys",
      number: "Ha de ser un número",
      email: "Ha de ser un correu electrònic vàlid",
      oneOf: "Ha de ser una de: %{options}",
      regex: "Ha de coincidir amb un format específic (regex): %{pattern}"
    }
  }
};

export default catalanMessages;
