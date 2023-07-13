import styled from "styled-components";

export const CardsComponent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export const Box = styled.div`
    table {
        border: 1px solid #ccc;
        margin: 0;
        padding: 0;
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
        color: ${(props) => props.theme.black};
    }
    table caption {
        font-size: 1.5rem;
        margin: 0.5em 0 0.75em;
    }
    table tr {
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        padding: 0.35em;
    }

    table th,
    table td {
        padding: 0.6em;
        text-align: center;
    }

    table th {
        font-size: 0.85em;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    table td .action {
        border: 0;
        padding: 5px;
        border-radius: 4px;
        display: inline-block;
        margin-right: 3px;
        background: none;
    }

    .table td .action svg {
        vertical-align: middle;
        padding: 10px;
    }

    table td .badge {
        padding: 3px;
        border-radius: 3px;
        color: #fff;
    }

    .done {
        background-color: green;
        padding: 8px;
        border-radius: 6px;
        color: #fff;
    }
    .notDone {
        background-color: red;
        padding: 8px;
        border-radius: 6px;
        color: #fff;
    }
    @media screen and (max-width: 768px) {
        table {
            border: 0;
        }
        table caption {
            font-size: 1.3em;
        }
        table thead {
            border: none;
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }

        table tr {
            border-bottom: 3px solid #ddd;
            display: block;
            margin-bottom: 0.6em;
        }
        table td {
            border-bottom: 1px solid #ddd;
            display: block;
            font-size: 1em;
            text-align: right;
        }

        table td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`;
